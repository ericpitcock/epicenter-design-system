import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.0265 6.58317L10.5685 8.83061C9.78064 9.15501 9.15501 9.78064 8.83061 10.5685L6.58317 16.0265C6.22273 16.9019 7.09809 17.7773 7.97346 17.4168L13.4315 15.1694C14.2194 14.845 14.845 14.2194 15.1694 13.4315L17.4168 7.97346C17.7773 7.09809 16.9019 6.22273 16.0265 6.58317Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 12V12.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Navigation05',
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
