import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/view.story.js');
    require('../stories/collectionView.story.js');
    require('../stories/gridView.story.js');
    require('../stories/listView.story.js');
    require('../stories/navigationView.story.js');
    require('../stories/scrollableView.story.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
