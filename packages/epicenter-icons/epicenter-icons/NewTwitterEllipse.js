import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 17L11.1935 12.8065M17 7L12.8065 11.1935M12.8065 11.1935L9.77778 7H7L11.1935 12.8065M12.8065 11.1935L14.9032 14.0968L17 17H14.2222L11.1935 12.8065', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z' })

export default defineComponent({
    name: 'NewTwitterEllipse',
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
