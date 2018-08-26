import React, {Component} from 'react';
import Modal from './Modal';

export default class Employee extends Component {
    constructor(props) {
        super();
         this.state = {
            modalOpened: false
        }
    }

    modalToggle = () => {
        this.setState({modalOpened: !this.state.modalOpened})
    }

    render() {
        const {employee} =this.props

        return (
            <div>
                <div className='hidden-xs' onClick={this.modalToggle}>
                    <div className='col-lg-4 emp-row'>
                        <div className="col-lg-4">
                            <img src={employee.avatar} alt=""/>
                        </div>
                        <div className="col-lg-8 card-text">
                            <div>
                            <span className='name'>
                                {employee.firstName} &nbsp;
                                {employee.lastName}</span>
                                <div>
                                    {employee.bio.slice(0,70)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal details={employee} modalOpened={this.state.modalOpened}
                           toggle={this.modalToggle}></Modal>
                </div>

                <div className='visible-xs'>
                    <div className='col-xs-12 employee'>
                        <div className="col-xs-4">
                            <img className='img-responsive' src={employee.avatar} alt=""/>
                        </div>
                        <div className="col-xs-8">
                            <div>
                            <span className='name'> {employee.firstName} &nbsp;
                                {employee.lastName}</span>
                            </div>
                            <div>{employee.jobTitle}</div>
                            <div>{employee.age}</div>
                            <div>{new Date(employee.dateJoined).toLocaleDateString()}</div>
                            <div>
                                {employee.bio.slice(0, 80)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
