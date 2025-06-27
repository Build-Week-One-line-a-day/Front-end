import React from 'react';
import PropTypes from 'prop-types';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {
  Card,
  CardText,
  CardTitle,
  Button
} from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import Trash from '../../img/trashBlue.svg';
import Pencil from '../../img/pencilBlue.svg';

function Entry({ entry, entries, setEntries, history }) {
  const deletePost = () => {
    axiosWithAuth().delete(`/users/posts/${entry.id}`)
      .then(() => {
        const updatedEntries = entries.filter((e) => e.id !== entry.id);
        setEntries(updatedEntries);
        history.push('/recent');
      })
      .catch((error) => {
        console.error('Delete failed:', error);
      });
  };

  let newDate1 = '';
  let newDate2 = '';

  if (entry?.created_at) {
    const [datePart] = entry.created_at.split(' ');
    const [year, month, day] = datePart.split('-');
    newDate1 = `${month}-${day}`;
    newDate2 = `-${year}`;
  }

  return (
    <Card className="card">
      <div className="row">
        <div className="col-sm-3 text-left buttonContainer">
          <div className="fullDate">
            <span className="yellow">{newDate1}</span>
            <span className="blue">{newDate2}</span>
          </div>

          <div className="editAndDelete">
            <NavLink to={{
              pathname: `/edit/${entry.id}`,
              state: {
                title: entry.title,
                contents: entry.contents,
                created_at: entry.created_at
              }
            }}>
              <Button color="warning" size="sm">
                <img alt="pencil" src={Pencil} />
              </Button>
            </NavLink>

            <Button onClick={deletePost} className="trash" size="sm">
              <img src={Trash} alt="trash can" className="trash" />
            </Button>
          </div>
        </div>

        <div className="col-sm-8 text-left">
          <CardTitle className="title">{entry.title}</CardTitle>
          <CardText className="contents">{entry.contents}</CardText>
        </div>
      </div>
    </Card>
  );
}

Entry.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    contents: PropTypes.string,
    created_at: PropTypes.string
  }).isRequired,
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEntries: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Entry);
