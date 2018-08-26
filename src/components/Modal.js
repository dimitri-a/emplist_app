import React, {Component} from 'react';

export default class Modal extends Component {
    render() {
        const coverClass = this.props.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.props.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        
        const {details} = this.props;
        
        return (
            <div>
                <div className={containerClass}>
                    <div className='hidden-xs'>
                        <button onClick={this.toggle} className="close"/>
                        <div className='employee'>
                            <div className="col-lg-4 space">
                                <img src={details.avatar} alt=""/>
                                <div className='joined'>{details.jobTitle}</div>
                                <div>{details.age}</div>
                                <div>{new Date(details.dateJoined).toLocaleDateString()}</div>
                            </div>

                            <div className="col-lg-8 detail">
                                <div>
                                <span className='name'> {details.firstName} &nbsp;
                                    {details.lastName}</span>
                                    <hr/>
                                    <div>
                                        {details.bio.slice(0, 80)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={coverClass} onClick={this.toggle}></div>
            </div>
        )
    }
}