import React, {Component} from 'react';
import Modal from './Modal';

export default class Employee extends Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            modalOpened: false
        }
    }

    modalToggle = () => {
        this.setState({modalOpened: !this.state.modalOpened})
    }

    render() {
        return (
            <div>
                <div className='hidden-xs' onClick={this.modalToggle}>
                    <div className='col-lg-4 emp-row'>
                        <div className="col-lg-4">
                            <img src={this.props.details.avatar} alt=""/>
                        </div>
                        <div className="col-lg-8 card-text">
                            <div>
                            <span className='name'>
                                {this.props.details.firstName} &nbsp;
                                {this.props.details.lastName}</span>
                                <div>
                                    {this.props.details.bio.slice(0,70)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal details={this.props.details} modalOpened={this.state.modalOpened}
                           toggle={this.modalToggle}></Modal>
                </div>

                <div className='visible-xs'>
                    <div className='col-xs-12 employee'>
                        <div className="col-xs-4">
                            <img className='img-responsive' src={this.props.details.avatar} alt=""/>
                        </div>
                        <div className="col-xs-8">
                            <div>
                            <span className='name'> {this.props.details.firstName} &nbsp;
                                {this.props.details.lastName}</span>
                            </div>
                            <div>{this.props.details.jobTitle}</div>
                            <div>{this.props.details.age}</div>
                            <div>{new Date(this.props.details.dateJoined).toLocaleDateString()}</div>
                            <div>
                                {this.props.details.bio.slice(0, 80)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
