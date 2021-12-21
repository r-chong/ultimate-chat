import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavigationDrawer() {
  const [active_tab, set_active_tab] = React.useState(0);

  const handle_tab_change = (event, new_value) => {
    set_active_tab(new_value);
  };

  return (
    <div>
      <Toolbar />
      <Tabs
        value={active_tab}
        onChange={handle_tab_change}
        orientation="vertical"
        variant="scrollable"
        aria-label="Page Navigation"
        indicatorColor="secondary"
        selectionFollowsFocus
      >
        {[
          ['Chat', '/'],
          ['Resources', '/resources'],
          ['Settings', '/settings'],
        ].map((tab_info, index) => (
          <Tab
            component={Link}
            label={tab_info[0]}
            key={tab_info[0]}
            to={tab_info[1]}
          />
        ))}
      </Tabs>
    </div>
  );
}
