import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 13V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 2V7C13 8.10457 13.8954 9 15 9H20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 22L17.8529 19.8529M17.8529 19.8529C17.9675 19.7384 18.0739 19.6158 18.1714 19.486C18.602 18.913 18.8571 18.2006 18.8571 17.4286C18.8571 15.535 17.3221 14 15.4286 14C13.535 14 12 15.535 12 17.4286C12 19.3221 13.535 20.8571 15.4286 20.8571C16.3753 20.8571 17.2325 20.4734 17.8529 19.8529Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileSearch',
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
