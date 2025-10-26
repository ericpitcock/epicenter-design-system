import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z' })
const _hoisted2 = h('path', { 'd': 'M9 7.5L12 11M12 11L15 7.5M12 11V16.5M14.5 13H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'YenCircle',
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
