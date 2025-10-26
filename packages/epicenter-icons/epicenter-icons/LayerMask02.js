import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z' })
const _hoisted2 = h('path', { 'd': 'M8.5 2.5C12.2967 3.93836 15 7.64912 15 12C15 16.3509 12.2967 20.0617 8.5 21.5' })

export default defineComponent({
    name: 'LayerMask02',
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
