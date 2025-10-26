import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 14V5C21.5 3.34315 20.1569 2 18.5 2H5.5C3.84315 2 2.5 3.34315 2.5 5V14C2.5 15.6569 3.84315 17 5.5 17L18.5 17C20.1569 17 21.5 15.6569 21.5 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 17L12 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 22L12.0001 19L17 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Presentation01',
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
