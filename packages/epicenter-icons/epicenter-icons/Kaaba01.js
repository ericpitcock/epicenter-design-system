import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.5 22V5.26009C3.5 4.81088 3.79954 4.4168 4.23236 4.29657L12.2324 2.07435C12.4075 2.0257 12.5925 2.0257 12.7676 2.07435L20.7676 4.29657C21.2005 4.4168 21.5 4.81088 21.5 5.26009V22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 9L12.2838 7.0482C12.4267 7.01645 12.5748 7.01646 12.7177 7.0482L21.5008 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.15 12.7L21.5 13M16.1 11.8L17 12M13.4 11.2L12.5 11L11.6 11.2M4.85 12.7L3.5 13M8.9 11.8L8 12', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M2.5 22H22.5', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M12.5 7V22' })

export default defineComponent({
    name: 'Kaaba01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
