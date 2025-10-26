import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 12.0898 8.41015 15 12 15C15.5898 15 18.5 12.0899 18.5 8.5C18.5 4.91015 15.5898 2 12 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.9992 6V8.5M10.9992 8.5V11M10.9992 8.5H12.75M11.9992 6L12 5M12 11.125V12M10 6H12.75C13.4404 6 14 6.55964 14 7.25C14 7.94036 13.4404 8.5 12.75 8.5M12.75 8.5C13.4404 8.5 14 9.05964 14 9.75C14 10.4404 13.4404 11 12.75 11H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 19.5L12 22L14.5 19.5M12 17.5V21.3912', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinDown01',
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
