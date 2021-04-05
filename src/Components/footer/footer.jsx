import './footer.css'


const activeFilter = [
    {
        id: 'all',
        text: 'All'
    },

    {
        id: 'active',
        text: 'Active'
    },

    {
        id: 'completed',
        text: 'Completed'
    },
]


function Footer({handleFilterTask}) {

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__text">
                    {
                        activeFilter.map(({id, text}) => {
                            return <div onClick={() => handleFilterTask(id)}>{text}</div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;