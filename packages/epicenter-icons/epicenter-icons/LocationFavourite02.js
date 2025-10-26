import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2C7.30558 2 3.5 5.61786 3.5 10.0807C3.5 14.9412 8.21916 17.3692 11.1092 20.806C11.5669 21.3502 12.4531 21.3646 12.9211 20.8292C15.8645 17.4614 20.5 14.8475 20.5 10.0807C20.5 5.61786 16.6944 2 12 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.7431 6.78961C13.1465 5.95704 12 7.18433 12 7.18433C12 7.18433 10.8535 5.95704 9.25685 6.7896C7.32296 7.798 7.18408 11.7469 12 13.5C16.816 11.7469 16.677 7.798 14.7431 6.78961Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LocationFavourite02',
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
