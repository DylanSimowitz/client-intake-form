export default {
  ui: {
    snackbar: {
      open: false,
      message: ''
    },
    dialog: {
      open: false,
      message: '',
      title: '',
      action: function() {}
    },
  },
  auth: {
    authenticated: false,
    user: {}
  },
  admin: {
    clients: [],
    selectedClient: ''
  },
}
