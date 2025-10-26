import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 16.5C12 16.5 7 13.3235 7 10.25C7 8.73122 8.05263 7.5 9.5 7.5C10.25 7.5 11 7.76471 12 8.82353C13 7.76471 13.75 7.5 14.5 7.5C15.9474 7.5 17 8.73122 17 10.25C17 13.3235 12 16.5 12 16.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.9995 5V19C20.9995 20.1046 20.1041 21 18.9995 21H4.99951C3.89494 21 2.99951 20.1046 2.99951 19V5C2.99951 3.89543 3.89494 3 4.99951 3H18.9995C20.1041 3 20.9995 3.89543 20.9995 5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FavouriteSquare',
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
