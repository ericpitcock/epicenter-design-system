import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 13V16.7165C8 17.9875 8.40362 19.2257 9.15266 20.2525L10.4023 21.9656C10.4336 22.0085 10.4906 22.0118 10.5256 21.9725L12.9751 19.224C13.0132 19.1813 13.0067 19.1095 12.9618 19.0764L11.8492 18.2557C10.9455 17.5891 10.2471 16.6822 9.83324 15.6383L8.8654 13.1967', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 12.497V6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 6.5H5C3.89543 6.5 3 7.39543 3 8.5V10.5C3 11.6046 3.89543 12.5 5 12.5H7.5L16.7554 16.4666C17.5071 16.7888 18.3949 16.633 18.8995 15.9894C20.0464 14.5265 21 12.4901 21 9.5C21 6.50995 20.0464 4.47354 18.8995 3.01058C18.3949 2.36697 17.5071 2.21124 16.7554 2.53339L7.5 6.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Megaphone01',
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
