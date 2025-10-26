import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 14L19 12L17 10M13.5 12H18.3912', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Radius',
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
