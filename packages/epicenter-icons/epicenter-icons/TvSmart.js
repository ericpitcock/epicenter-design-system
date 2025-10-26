import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 3H5C3.34315 3 2 4.34315 2 6V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V6C22 4.34315 20.6569 3 19 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.9 15.5C16.9 14.6163 17.6163 13.9 18.5 13.9M13.7 15.5C13.7 12.849 15.849 10.7 18.5 10.7M10.5 15.5C10.5 11.0817 14.0817 7.5 18.5 7.5', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 19L19 21M6 19L5 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TvSmart',
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
