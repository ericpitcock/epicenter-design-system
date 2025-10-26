import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.6183 18L22 6H16L14 10L13.5 6H9.62417C8.62417 9 6.5 13.5 2 13.5V18C6.5 18 13 12.5 13 12.5L10 18H15.6183Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 6V10.5H6.5V6H2Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Webflow',
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
