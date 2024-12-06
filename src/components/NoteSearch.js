import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };

    this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this);
  }

  onQueryChangeEventHandler(event) {
    console.log(event.target.value);
    this.setState({ query: event.target.value }, () => {
        return this.props.searchNote(this.state);
    });
  }

  render() {
    return (
      <div className="note-search float-right">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={this.state.query}
          onChange={this.onQueryChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
