import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 12.5C14.5827 12.5 16.9032 12.8863 18.5 13.5C18.5 12.8474 18.3107 12.2087 17.955 11.6616L12 2.5L6.04499 11.6616C5.68931 12.2087 5.5 12.8474 5.5 13.5C7.09679 12.8863 9.41727 12.5 12 12.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 13C16 13 16.5 13.8 16.5 15C16.5 15 16.5 17 15 17C13.5 17 13.5 15.5 12 15.5C10.5 15.5 10.5 17 9 17C7.5 17 7.5 15 7.5 15C7.5 13.8 8 13 8 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 13.5C18.5 13.5 19 14.4 19 16C19 18 17.7385 19.1308 16 20C14 21 12 22.5 12 22.5C12 22.5 10 21 8 20C6.26155 19.1308 5 18 5 16C5 14.4 5.5 13.5 5.5 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Gnome',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 25',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
