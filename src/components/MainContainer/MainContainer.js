import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DroppableList from '../DroppableList/DroppableList';
import { reorder, move } from './utils';
import { USERS } from '../../data/data';

const WORKING = 'WORKING';
const MEETING = 'MEETING'


class MainContainer extends Component {
    state = {
        workingUsers: USERS.map((x, i) => {x.id = `item-${i + 1}`; return x}),
        inMeetingUsers: []
    };
    id2List = {
        WORKING: 'workingUsers',
        MEETING: 'inMeetingUsers'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === MEETING) {
                state = { inMeetingUsers: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                workingUsers: result.WORKING,
                inMeetingUsers: result.MEETING
            });
        }
    };

    render() {
        return (
              <DragDropContext onDragEnd={this.onDragEnd}>
                <DroppableList identifier={WORKING} items={this.state.workingUsers} ></DroppableList>
                <DroppableList identifier={MEETING} items={this.state.inMeetingUsers} ></DroppableList>
              </DragDropContext>

                   
        );
    }
}

export default MainContainer;