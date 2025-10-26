import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.2064 9.76269L14.3045 10.6845L11 13.9998L12.5 15.4998M12.5 15.4998L18 20.9998L21.9996 2.99976L2 10.9998L7.5 13.9998L8.5 19.9998L12.5 15.4998Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Telegram',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
