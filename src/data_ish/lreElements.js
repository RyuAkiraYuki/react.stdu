class LreElements {
    lrePlayer = [
        {
            id: 0,
            layer: 'branding',
            title: 'Player Branding Area',
            styleProps: [
                { 
                    id: 0,
                    propertyName: 'background-color',
                    propertyValue: 'transparent' 
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
                    styleProps: [
                        { 
                            id: 0,
                            propertyName: 'font-family',
                            propertyValue: 'Roboto' 
                        },
                        { 
                            id: 1,
                            propertyName: 'font-size',
                            propertyValue: '12px' 
                        },
                        { 
                            id: 2,
                            propertyName: 'color',
                            propertyValue: '#ccc' 
                        },
                        { 
                            id: 3,
                            propertyName: 'background-color',
                            propertyValue: 'transparent' 
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
                    styleProps: [
                        { 
                            id: 0,
                            propertyName: 'font-family',
                            propertyValue: 'Roboto' 
                        },
                        { 
                            id: 1,
                            propertyName: 'font-size',
                            propertyValue: '12px' 
                        },
                        { 
                            id: 2,
                            propertyName: 'color',
                            propertyValue: '#ccc' 
                        },
                        { 
                            id: 3,
                            propertyName: 'background-color',
                            propertyValue: 'transparent' 
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
                            propertyValue: 'Roboto' 
                        },
                        { 
                            id: 1,
                            propertyName: 'font-size',
                            propertyValue: '12px' 
                        },
                        { 
                            id: 2,
                            propertyName: 'color',
                            propertyValue: '#ccc' 
                        }
                    ]
                },
                {
                    id: 1,
                    element: 'playbackControls',
                    title: 'Playback Controls Styling',
                    elements: [
                        {
                            id: 0,
                            element: 'playerProgressControl',
                            styleProps: [
                                { 
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '3px' 
                                },
                                { 
                                    id: 1,
                                    propertyName: 'background-color',
                                    propertyValue: '#a43cff' 
                                }
                            ]
                        },
                        {
                            id: 1,
                            element: 'playerLoadProgressControl',
                            styleProps: [
                                { 
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '3px' 
                                },
                                { 
                                    id: 1,
                                    propertyName: 'background-color',
                                    propertyValue: '#dfbbff' 
                                }
                            ]
                        },
                        {
                            id: 2,
                            element: 'playerProgressHolderControl',
                            styleProps: [
                                { 
                                    id: 0,
                                    propertyName: 'height',
                                    propertyValue: '3px' 
                                },
                                { 
                                    id: 1,
                                    propertyName: 'background-color',
                                    propertyValue: '#d8d8d8' 
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