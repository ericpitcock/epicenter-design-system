import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22C16.417 22 20 18.428 20 13.9971C20 9.56625 16.417 6 12 6V10C14.2054 10 16 11.7848 16 13.9971C16 16.2095 14.2054 18 12 18C9.79462 18 8 16.2123 8 14V2.05C8 2.02239 7.97761 2 7.95 2L4.05 2.00038C4.02238 2.00038 4 2.02277 4 2.05038V13.9971C4 18.428 7.583 22 12 22Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bebo',
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
