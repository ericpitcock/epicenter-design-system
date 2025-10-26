import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '10.5', 'cy': '10.5', 'r': '8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.4998 10.5H10.5075M14 7L13 8M8 13L7 14M14 14L13 13M8 8L7 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 19H20.5C21.3284 19 22 19.6716 22 20.5C22 21.3284 21.3284 22 20.5 22H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FilmRoll02',
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
