// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TimelineIcon from '@material-ui/icons/Timeline';
import CircleIcon from '@material-ui/icons/CheckCircle';
import TimeIcon from '@material-ui/icons/AccessTime';
import GridIcon from '@material-ui/icons/GridOn';
import BarchartIcon from '@material-ui/icons/BarChart';
import NotificationIcon from '@material-ui/icons/NotificationImportant';
import ReportIcon from '@material-ui/icons/Report';


export const portalListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BarchartIcon />
      </ListItemIcon>
      <ListItemText primary="Scorecard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimeIcon />
      </ListItemIcon>
      <ListItemText primary="Yearly recap" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GridIcon />
      </ListItemIcon>
      <ListItemText primary="Farm &amp; plant detail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CircleIcon />
      </ListItemIcon>
      <ListItemText primary="Compliance" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <ListItemText primary="Supply chain" />
    </ListItem>

  </div>
);

export const otherListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <NotificationIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
  </div>
);
