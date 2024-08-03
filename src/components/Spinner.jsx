const Spinner = () => {
    const spinnerStyle = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div className="container" style={spinnerStyle}>
            <div className="spinner-grow text-success w-25 h-25" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner