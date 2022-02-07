import React, { useEffect, useState } from 'react';

import List, { withSubList, withMessages } from './List';

import { getAllUsers, getUserFriends } from '../../api/user.api';
import { getAllGroups, getGroupMembers } from '../../api/group.api';
import { getUserMessages } from '../../api/message.api';



const SocialNetwork = (props) => {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [friends, setFriends] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [currentGroup, setCurrentGroup] = useState();
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data)
    });
    getAllGroups().then((data) => {
      setGroups(data)
    });
  }, []);
  useEffect(() => {
    if (currentUser) {
      getUserFriends(currentUser.id).then((data) => {
        setFriends(data)
      });
      getUserMessages(currentUser.id).then((data) => {
        setMessages(data)
      });
    }
  }, [currentUser]);
  useEffect(() => {
    if (currentGroup)
      getGroupMembers(currentGroup.id).then((data) => {
        setMembers(data)
      });
  }, [currentGroup]);

  return (
    <div className='root-container'>
      <div style={{width: '50%'}}>
        {withMessages(withSubList(List))({ 
          //props
          title: "Users",
          data: users,
          clickItem: setCurrentUser,
          subListData: friends,
          subListTitle: `${currentUser?.name} friends`,
          messagesData: messages,
          messagesTitle: `${currentUser?.name} messages`
        })}        
      </div>
      <div>
        {withSubList(List)({ 
          //props
          title: "Groups",
          data: groups,
          clickItem: setCurrentGroup,
          subListData: members,
          subListTitle: `${currentGroup?.name} members`,
        })}
      </div>
    </div>
  )
};

export default SocialNetwork;
