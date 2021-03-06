class LreElements {
    lrePlayer = [
        {
            id: 0,
            layer: 'branding',
            title: 'Player Branding Area',
            cssSelector: '#brand-container',
            styleProps: [
                {
                    id: 0,
                    propertyName: 'background-color',
                    propertyValue: 'transparent',
                    pickerType: 'color'
                },
                {
                    id: 1,
                    propertyName: 'font-size',
                    propertyValue: '10px'
                },
            ],
            elements: [
                {
                    id: 0,
                    element: 'leftBranding',
                    title: 'Left Branding Styling',
                    cssSelector: '#brand-container #ac-branding-left-text',
                    styleProps: [
                        {
                            id: 0,
                            propertyName: 'font-family',
                            propertyValue: 'sans-serif',
                            pickerType: 'font'
                        },
                        {
                            id: 1,
                            propertyName: 'font-size',
                            propertyValue: '12px'
                        },
                        {
                            id: 2,
                            propertyName: 'color',
                            propertyValue: '#ccc',
                            pickerType: 'color'
                        },
                        {
                            id: 3,
                            propertyName: 'background-color',
                            propertyValue: 'transparent',
                            pickerType: 'color'
                        },
                        {
                            id: 4,
                            propertyName: 'width',
                            propertyValue: '50%'
                        }
                    ]
                },
                {
                    id: 1,
                    element: 'rightBranding',
                    title: 'Right Branding Styling',
                    cssSelector: '#brand-container #ac-branding-right-text',
                    styleProps: [
                        {
                            id: 0,
                            propertyName: 'font-family',
                            propertyValue: 'Roboto',
                            pickerType: 'font'
                        },
                        {
                            id: 1,
                            propertyName: 'font-size',
                            propertyValue: '12px'
                        },
                        {
                            id: 2,
                            propertyName: 'color',
                            propertyValue: '#ccc',
                            pickerType: 'color'
                        },
                        {
                            id: 3,
                            propertyName: 'background-color',
                            propertyValue: 'transparent',
                            pickerType: 'color'
                        },
                        {
                            id: 4,
                            propertyName: 'width',
                            propertyValue: '50%'
                        }
                    ]

                }
            ]
        },
        {
            id: 1,
            layer: 'screen',
            title: 'Player Screen Area',
            elements: [
                {
                    id: 0,
                    element: 'videoTitle',
                    title: 'Current Video Title Styling',
                    styleProps: [
                        {
                            id: 0,
                            propertyName: 'font-family',
                            propertyValue: 'Roboto',
                            pickerType: 'font'
                        },
                        {
                            id: 1,
                            propertyName: 'font-size',
                            propertyValue: '12px'
                        },
                        {
                            id: 2,
                            propertyName: 'color',
                            propertyValue: '#ccc',
                            pickerType: 'color'
                        }
                    ]
                },
                {
                    id: 1,
                    element: 'playbackProgressControls',
                    title: 'Progress Controls Styling',
                    elements: [
                        {
                            id: 0,
                            element: 'playerProgressControl',
                            title: 'Player progress control',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-play-progress',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '3px'
                                },
                                {
                                    id: 1,
                                    propertyName: 'background-color',
                                    propertyValue: '#a43cff',
                                    pickerType: 'color'
                                }
                            ]
                        },
                        {
                            id: 1,
                            element: 'playerLoadProgressControl',
                            title: 'Player load progress control',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-load-progress',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '3px'
                                },
                                {
                                    id: 1,
                                    propertyName: 'background-color',
                                    propertyValue: '#dfbbff',
                                    pickerType: 'color'
                                }
                            ]
                        },
                        {
                            id: 2,
                            element: 'playerProgressHolderControl',
                            title: 'Player progress holder control',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-slider',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '3px'
                                },
                                {
                                    id: 1,
                                    propertyName: 'background-color',
                                    propertyValue: '#d8d8d8',
                                    pickerType: 'color'
                                }
                            ]
                        },
                        {
                            id: 3,
                            element: 'playerProgressCrawlerControl',
                            title: 'Player progress crawler control',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-slider .vjs-play-progress:before',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'font-size',
                                    propertyValue: '0.9em'
                                },
                                {
                                    id: 1,
                                    propertyName: 'color',
                                    propertyValue: '#000000',
                                    pickerType: 'color'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    element: 'playbackButtonControls',
                    title: 'Playback Button Controls Styling',
                    // cssSelector:'#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-control',
                    // styleProps: [
                    //     {
                    //         id: 0,
                    //         propertyName: 'height',
                    //         propertyValue: '15px'
                    //     }
                    // ],
                    elements:[
                        {
                            id: 0,
                            element: 'playerPlayPauseControl',
                            title: 'Player play/pause button',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-big-play-button .vjs-icon-placeholder:before, #ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-play-control .vjs-icon-placeholder:before, #ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-icon-play:before',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '15px'
                                }
                            ]
                        },
                        {
                            id: 1,
                            element: 'playerUpNextControl',
                            title: 'Player Up/Next button',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .lre-next-up .vjs-icon-placeholder::before',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '15px'
                                }
                            ]
                        },
                        {
                            id: 2,
                            element: 'playerVolumeBtnControl',
                            title: 'Player Volume button',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before, #ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-icon-volume-mute:before',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '15px'
                                }
                            ]
                        },
                        {
                            id: 3,
                            element: 'playerFullScreenControl',
                            title: 'Player Fullscreen button',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before, #ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-icon-fullscreen-enter:before',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '15px'
                                }
                            ]
                        },
                        {
                            id: 3,
                            element: 'playerTimeStatsControl',
                            title: 'Player Time Stats',
                            cssSelector: '#ac-lre-wrapper.luminous-theme #ac-player-wrapper #ac-lre-player .video-js .vjs-time-control',
                            styleProps: [
                                {
                                    id: 0,
                                    propertyName: 'font-size',
                                    propertyValue: '15px'
                                },
                                {
                                    id: 0,
                                    propertyName: 'color',
                                    propertyValue: '#ffffff',
                                    pickerType: 'color'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default LreElements;