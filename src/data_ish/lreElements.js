class LreElements {
    lrePlayer = [
        {
            id: 0,
            layer: 'branding',
            styleProps: {
                bgColor: 'transparent'
            },
            elements: [
                {
                    id: 0,
                    element: 'leftBranding',
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
            layer: 'player',
            elements: [
                {
                    id: 0,
                    element: 'videoTitle',
                    styleProps: {
                        fontFace: 'Roboto',
                        fontSize: 12,
                        fontColor: '#ccc'
                    }
                },
                {
                    id: 1,
                    element: 'playbackControls',
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