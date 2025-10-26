import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 3H5C3.34315 3 2 4.34315 2 6V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V6C22 4.34315 20.6569 3 19 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 19L19 21M6 19L5 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tv02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
