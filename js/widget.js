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
    }

  })

})

function launchSettings() {
  chameleon.promptHTML({
    url: 'settings.html'
  })
}