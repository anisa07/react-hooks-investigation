import React, { useState, useContext } from 'react';
import { AppContext } from '../utils/context.js';

import 'antd/dist/antd.css';
import './Todo.css';

import { List, Input, Button, Row, Col, Typography, Select } from 'antd';

const { Option } = Select;
const { Text } = Typography;

export const TodoList = () => {
	const [state, dispatch] = useContext(AppContext);
	const [newTodo, setNewTodo] = useState('');

	const handleTodoInputChange = (e) => {
		setNewTodo(e.target.value)
	};

	const handleAddNewTodo = () => {
		if (newTodo) {
			dispatch({ type: 'add', value: { name: newTodo, status: 'not started' } })
		}
	};

	const handleUpdateStatus = (e, item) => {
		dispatch({ type: 'update status', value: { ...item, status: e } })
	};

	const handleRemoveTodo = (item) => {
		if (item) {
			dispatch({ type: 'remove', value: item.name })
		}
	};

	return (
		<div>
			<List
				size="large"
				header={<div>My Todo List</div>}
				bordered
				dataSource={state.todos}
				renderItem={item => <List.Item
					actions={[<Select defaultValue={item.status} style={{ width: 120 }} onChange={(e) => {
						handleUpdateStatus(e, item)
					}}>
						<Option value="done">Done</Option>
						<Option value="in progress">In progress</Option>
						<Option value="not started yet">Not started yet</Option>
					</Select>, <a key="list-loadmore-more" onClick={() => {
						handleRemoveTodo(item)
					}}>delete</a>]}>
					{item.name}
					<Text type="secondary"> {item.status}</Text>
				</List.Item>}
			/>
			<Row>
				<Col xl={10}><Input placeholder="New todo" value={newTodo} onChange={handleTodoInputChange}/></Col>
				<Col xl={2}><Button onClick={handleAddNewTodo}>+</Button></Col>
			</Row>
		</div>
	)
};
