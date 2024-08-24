import React from 'react';
import Button from './Button';
import './FriendsList.css';

const FriendsList = ({ newData, handleSelection, selectedFriend }) => {
  return (
    <div className='friends-list'>
      <ul className='frnds-list'>
        {newData.map((friend) => (
          <li key={friend.id} className={selectedFriend?.id === friend.id ? 'frnd-sec active' :'frnd-sec' }>
            <div className='name-own'>
              <img src={friend.image} alt='friend' />
              <div>
                <p>{friend.name}</p>
                <small>
                  {friend.balance === 0 && <small>You and {friend.name} are even</small>}
                  {friend.balance > 0 && <small className='green'>{friend.name} owes you {friend.balance}€</small>}
                  {friend.balance < 0 && <small className='red'>You owe {friend.name} {Math.abs(friend.balance)}€</small>}
                </small>
              </div>
            </div>
            <Button onClick={() => handleSelection(friend)}>
              {selectedFriend?.id === friend.id ? 'Close' : 'Select'}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
