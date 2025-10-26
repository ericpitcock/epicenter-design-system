import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 18.5V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5L18.5 21.5C20.1569 21.5 21.5 20.1569 21.5 18.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.5 15V12.5M5.5 12.5V10H6.75C7.44036 10 8 10.5596 8 11.25C8 11.9404 7.44036 12.5 6.75 12.5H5.5ZM16 15V12.5M16 12.5V10H17.25C17.9404 10 18.5 10.5596 18.5 11.25C18.5 11.9404 17.9404 12.5 17.25 12.5H16ZM10.5 10V12.5M10.5 12.5V15M10.5 12.5H13.5M13.5 12.5V10M13.5 12.5V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Php',
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
