/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, List, ListHeader, ListItem } from 'react-onsenui';

export default function ListExample() {
  return (
    <>
      <List>
        <ListItem>
          <div class="left">
            <img
              class="list-item__thumbnail"
              src="https://placekitten.com/g/40/40"
            />
          </div>
          <div class="center">
            <span class="list-item__title">Cutest kitty</span>
            <span class="list-item__subtitle">On the Internet</span>
          </div>
        </ListItem>
      </List>
      <List
        dataSource={['Row 1', 'Row 2']}
        renderHeader={() => <ListHeader>Thumbnails and titles</ListHeader>}
        renderRow={(row, idx) => (
          <ListItem>
            {row}
            <Button modifier="quiet">Remove</Button>
          </ListItem>
        )}
      />
    </>
  );
}
