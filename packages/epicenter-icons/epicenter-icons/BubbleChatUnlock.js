import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.4998 12C21.4998 17.2467 17.2465 21.5 11.9998 21.5C10.3717 21.5 8.83921 21.0904 7.49982 20.3687C5.49982 19.5 3.49982 19.9125 2.49982 20C2.98875 19.1667 3.60903 16.8818 2.98322 15C2.66962 14.057 2.49982 13.0483 2.49982 12C2.49982 6.75329 6.75311 2.5 11.9998 2.5C17.2465 2.5 21.4998 6.75329 21.4998 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.99982 11V9.5C9.99982 8.39543 10.8952 7.5 11.9998 7.5C12.5521 7.5 13.0521 7.72386 13.414 8.08579', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.4998 11H9.49982C8.94753 11 8.49982 11.4477 8.49982 12V14.5C8.49982 15.0523 8.94753 15.5 9.49982 15.5H14.4998C15.0521 15.5 15.4998 15.0523 15.4998 14.5V12C15.4998 11.4477 15.0521 11 14.4998 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BubbleChatUnlock',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
