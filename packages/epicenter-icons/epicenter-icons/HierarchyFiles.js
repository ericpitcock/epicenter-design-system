import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 5.99473H4M4 5.99473V2M4 5.99473L4.00097 16.0002C4.00108 17.1047 4.89648 18 6.00097 18H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.0858 2H14C13.4477 2 13 2.44772 13 3V9C13 9.55228 13.4477 10 14 10H19C19.5523 10 20 9.55228 20 9V4.91421C20 4.649 19.8946 4.39464 19.7071 4.20711L17.7929 2.29289C17.6054 2.10536 17.351 2 17.0858 2Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.0858 14H14C13.4477 14 13 14.4477 13 15V21C13 21.5523 13.4477 22 14 22H19C19.5523 22 20 21.5523 20 21V16.9142C20 16.649 19.8946 16.3946 19.7071 16.2071L17.7929 14.2929C17.6054 14.1054 17.351 14 17.0858 14Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HierarchyFiles',
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
