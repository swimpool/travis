$(function () {

  chameleon.widget({

    onLoad: function () {
    },

    onCreate: function () {
    },

    onResume: function () {
    },

    onPause: function () {
    },

    onLayout: function () {
    },

    onScrollTop: function () {
    },

    onScrollElsewhere: function () {
    },

    onLayoutModeStart: function () {
    },

    onLayoutModeComplete: function () {
    },

    onConnectionAvailableChanged: function (available) {
    },

    onConfigure: function () {
      launchSettings()
    },

    onTitleBar: function () {
    },

    onRefresh: function () {
    },

    onAction: function () {
    },

    notChameleon: function () {
        $('#chameleon-widget').html('<a href="http://chameleonlauncher.com/install/?url=http://192.168.2.210:5006">Install</a>')
    }

  })

})

function launchSettings() {
  chameleon.promptHTML({
    url: 'settings.html'
  })
}