import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 220,
  },
});

function DateAndTimePickers(props) {
  const { classes } = props;
  const date = moment().format('YYYY-MM-DDTHH:mm')

  return (
      <TextField
        onChange={props.handleDate}
        id="datetime-local"
        type="datetime-local"
        defaultValue={date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}

      />
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);
