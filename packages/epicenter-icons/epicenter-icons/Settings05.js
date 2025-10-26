import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5L2.5 4.5C2.5 3.39543 3.39543 2.5 4.5 2.5L19.5 2.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 14C16.5523 14 17 14.4477 17 15L17 16C17 16.5523 16.5523 17 16 17L15 17C14.4477 17 14 16.5523 14 16L14 15C14 14.4477 14.4477 14 15 14L16 14Z' })
const _hoisted3 = h('path', { 'd': 'M9 7C9.55228 7 10 7.44772 10 8L10 9C10 9.55228 9.55228 10 9 10L8 10C7.44772 10 7 9.55228 7 9L7 8C7 7.44772 7.44772 7 8 7L9 7Z' })
const _hoisted4 = h('path', { 'd': 'M7.5 15.5H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10.5 8.5H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Settings05',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
