import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.99998 3H3.99998C3.4477 3 2.99998 3.44772 2.99998 4V9C2.99998 9.55228 3.4477 10 3.99998 10H8.99998C9.55227 10 9.99998 9.55228 9.99998 9V4C9.99998 3.44772 9.55227 3 8.99998 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.99998 14H3.99998C3.4477 14 2.99998 14.4477 2.99998 15V20C2.99998 20.5523 3.4477 21 3.99998 21H8.99998C9.55227 21 9.99998 20.5523 9.99998 20V15C9.99998 14.4477 9.55227 14 8.99998 14Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'GridView',
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
            _hoisted4
        ])
    }
})
