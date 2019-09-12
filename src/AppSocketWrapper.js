import React, {PureComponent} from 'react';

import {config} from './config/api_config';
import io from 'socket.io-client';
import SocketContext from './SocketContext';

class AppSocketWrapper extends PureComponent {
  state = {
    token: null,
    os: null,
  };

  socket = null;

  // pushNotifications = PushNotification.configure({
  //   // (optional) Called when Token is generated (iOS and Android)
  //   onRegister: async data => {
  //     await AsyncStorage.setItem("pushNotificationsKey", data.token);
  //   },

  //   // (required) Called when a remote or local notification is opened or received
  //   onNotification: function(notification) {},

  //   // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  //   senderID: "819638503388",

  //   // IOS ONLY (optional): default: all - Permissions to register.
  //   permissions: {
  //     alert: true,
  //     badge: true,
  //     sound: true
  //   },

  //   // Should the initial notification be popped automatically
  //   // default: true
  //   popInitialNotification: true,
  //   requestPermissions: true
  // });

  componentDidMount() {
    this.socket = io(config.API_URL, {
      query: {
        // token: this.props.user.token,
        token: 'retar',
      },
    });
    this.setupListeners();
  }

  //   async componentWillReceiveProps(nextProps) {

  //     if (logged !== nextLogged || logged === true) {
  //       this.socket = io(apiConfig.ROOT_URL, {
  //         query: {
  //           token: nextProps.user.token
  //         }
  //       });
  //       const token = await AsyncStorage.getItem("pushNotificationsKey");
  //       this.socket.emit("newPushToken", token);
  //     }

  //     if (logged !== nextLogged && nextLogged === false) {
  //       this.socket.disconnect();
  //     }
  //   }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  setupListeners = () => {};

  render() {
    return (
      <SocketContext.Provider value={this.socket}>
        {this.props.children}
      </SocketContext.Provider>
    );
  }
}

export default AppSocketWrapper;
