import React from 'react';
import './style.css';

import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const initialState = {
  popoverAnchor: null,
  filteredData: [],
  showAllData: false,
};

export default class DropDownList extends React.PureComponent {
  state = initialState;

  render() {
    const { listData } = this.props;
    const { popoverAnchor, filteredData, showAllData } = this.state;
    return (
      <div className="root-container">
        <TextField
          label="Поиск по названию"
          id="drop-down-text"
          onChange={this.handleTextChange}
          size="small"
          inputProps={{ title: 'Введите название' }}
        />
        {filteredData?.length > 0 && popoverAnchor && (
          <List className="list-container">
            {filteredData.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        )}
        <div>
          <button
            title={showAllData ? 'Скрыть список' : 'Показать весь список'}
            onClick={() =>
              this.setState((prevState) => ({
                showAllData: !prevState.showAllData,
              }))
            }
          >
            {showAllData ? <>&#8593;</> : <>&#8595;</>}
          </button>
          {showAllData && (
            <fieldset>
              <legend>Весь список</legend>
              <List>
                {listData.map((item) => (
                  <ListItem disablePadding key={item.id}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </fieldset>
          )}
        </div>
      </div>
    );
  }

  handleTextChange = (e) => {
    const val = e.target.value;
    const filtered = this.props.listData.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    if (val && filtered?.length > 0) {
      this.setState({ filteredData: filtered, popoverAnchor: e.currentTarget });
    } else {
      this.setState({ filteredData: [], popoverAnchor: null });
    }
  };

  handlePopoverClose = () => {
    this.setState({ popoverAnchor: null });
  };
}
