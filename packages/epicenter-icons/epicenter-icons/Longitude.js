import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 12C17 6.47715 14.7614 2 12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22C14.7614 22 17 17.5228 17 12Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 2V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Longitude',
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
