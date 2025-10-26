import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 8C15.5 5.23858 13.2614 3 10.5 3C7.73858 3 5.5 5.23858 5.5 8C5.5 10.7614 7.73858 13 10.5 13C13.2614 13 15.5 10.7614 15.5 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 20C3.5 16.134 6.63401 13 10.5 13C11.775 13 12.9704 13.3409 14 13.9365', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 14.8462C16.5 13.8266 17.3954 13 18.5 13C19.6046 13 20.5 13.8266 20.5 14.8462C20.5 15.2137 20.3837 15.5561 20.1831 15.8438C19.5854 16.7012 18.5 17.0189 18.5 18.0385V18.5M18.4902 21H18.4992', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserQuestion01',
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
