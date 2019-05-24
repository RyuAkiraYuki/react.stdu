class LreElements {
    lrePlayer = [
        {
            id: 0,
            layer: 'branding',
            title: 'Player Branding Area',
            styleProps: [
                { 'background-color': 'transparent' }
            ],
            elements: [
                {
                    id: 0,
                    element: 'leftBranding',
                    title: 'Left Branding Styling',
                    styleProps: {
                        fontFace: 'Roboto',
                        fontSize: 12,
                        fontColor: '#ccc',
                        bgColor: 'transparent',
                        width: '50%'
                    }
                },
                {
                    id: 1,
                    element: 'rightBranding',
                    title: 'Right Branding Styling',
                    properties: {
                        fontFace: 'Roboto',
                        fontSize: 12,
                        fontColor: '#ccc',
                        bgColor: 'transparent',
                        width: '50%'
                    }
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
                    styleProps: {
                        fontFace: 'Roboto',
                        fontSize: 12,
                        fontColor: '#ccc'
                    }
                },
                {
                    id: 1,
                    element: 'playbackControls',
                    title: 'Playback Controls Styling',
                    elements: [
                        {
                            id: 0,
                            element: 'playerProgressControl',
                            styleProps: {
                                height: '3px',
                                bgColor: '#a43cff'
                            }
                        },
                        {
                            id: 1,
                            element: 'playerLoadProgressControl',
                            styleProps: {
                                height: '3px',
                                bgColor: '#dfbbff'
                            }
                        },
                        {
                            id: 2,
                            element: 'playerProgressHolderControl',
                            styleProps: {
                                height: '3px',
                                bgColor: '#d8d8d8'
                            }
                        }
                    ]
                }
            ]
        }
    ]
}

export default LreElements;