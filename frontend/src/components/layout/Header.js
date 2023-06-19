import React from 'react'

const Header = () => {
    return (
        <>
            <div>
                <ul className="nav nav-tabs" id="navId" role="tablist">
                    <li className="nav-item">
                        <a href="#tab1Id" className="nav-link active" data-bs-toggle="tab" aria-current="page">Ecommerce-App</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#tab2Id">cat1</a>
                            <a className="dropdown-item" href="#tab3Id">cat2</a>
                            <a className="dropdown-item" href="#tab4Id">cat3</a>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a href="#tab5Id" className="nav-link" data-bs-toggle="tab">shop</a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="tab1Id" role="tabpanel" />
                    <div className="tab-pane fade" id="tab2Id" role="tabpanel" />
                    <div className="tab-pane fade" id="tab3Id" role="tabpanel" />
                    <div className="tab-pane fade" id="tab4Id" role="tabpanel" />
                    <div className="tab-pane fade" id="tab5Id" role="tabpanel" />
                </div>
            </div>
        </>
    )
}

export default Header