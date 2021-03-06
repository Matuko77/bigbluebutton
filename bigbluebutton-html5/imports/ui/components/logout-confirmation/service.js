import { makeCall } from '/imports/ui/services/api/index';
import Users from '/imports/api/users';
import Breakouts from '/imports/api/breakouts';
import mapUser from '/imports/ui/services/user/mapUser';
import Auth from '/imports/ui/services/auth';

const endMeeting = () => {
  makeCall('endMeeting', Auth.credentials);
};

const isModerator = () => {
  const currentUserId = Auth.userID;
  const currentUser = Users.findOne({ userId: currentUserId });

  return (currentUser) ? mapUser(currentUser).isModerator : null;
};

const isBreakout = () => Breakouts.findOne({ breakoutId: Auth.meetingID });

export default {
  endMeeting,
  isModerator,
  isBreakout,
};
